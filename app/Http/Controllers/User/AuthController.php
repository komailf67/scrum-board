<?php

    namespace App\Http\Controllers\User;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use App\User;
    use Illuminate\Support\Facades\Auth;
    use JWTAuth;
    use \Validator;
    use Illuminate\Support\Facades\Hash;
    use Tymon\JWTAuth\Exceptions\JWTException;

    class AuthController extends Controller
    {
        protected $user;
        public function __construct()
        {
            $this->user = new User;
        }

        public function register(Request $request)
        {
            $validator = Validator::make($request->all(),
            [
                'firstName' =>'required|string',
                'lastName' =>'required|string',
                'email' =>'required|email',
                'password' =>'required|string|min:6',
                ]
            );
            if ($validator->fails())
            {
                return response()->json([
                    "success" => false,
                    "message" =>$validator->messages()->toArray(),
                ],400);
            }
            
            $checkEmail = $this->user->where("email",$request->email)->count();
            if ($checkEmail > 0)
            {
                return response()->json([
                    "success" => false,
                    "message" => 'this email already exist , please try another email',
                ],200);
            }
            $registerComplete =  $this->user::create([
                'firstName' =>$request->firstName,
                'lastName' =>$request->lastName,
                'email' =>$request->email,
                'password' =>Hash::make($request->password),
                ]);
            if ($registerComplete)
            {
                return $this->login($request);
            }

        }
        public function login(Request $request)
        {
            $validator = Validator::make($request->only('email' , 'password'),
                [
                    'email' =>'required|email',
                    'password' =>'required|string|min:6',
                ]
            );
            if ($validator->fails())
            {
                return response()->json([
                    "success" => false,
                    "message" =>$validator->messages()->toArray(),
                ],400);
            }
            $jwtToken = null;
            $input = $request->only("email" , "password");
            if (!$jwtToken = auth('users')->attempt($input))
            {
                return response()->json([
                    "success" => false,
                    "message" =>'invalid email or password',
                    ]);
                }
            return response()->json([
                'success' => true,
                'token' =>$jwtToken,
            ]);
        }
        public function logout()
        {
            auth('users')->logout();
            // $request->user()->token()->revoke();
            return response()->json([
                'message' => 'Successfully logged out'
        ]);
        }
    }
