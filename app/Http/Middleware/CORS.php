<?php

    namespace App\Http\Middleware;

    use Closure;

    class CORS
    {
        /**
         * Handle an incoming request.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  \Closure  $next
         * @return mixed
         */
        public function handle($request, Closure $next)
        {
            return $next($request)
                ->header('Access-Control_Allow-Origin','*')
                ->header('Access-Control_Allow-Methods','PUT , GET , POST ,DELETE , OPTION , PATCH')
                ->header('Access-Control_Allow-Headers','Origin , Content-Type , POST ,DELETE , OPTION , PATCH')
                ->header('Access-Control_Allow-Headers','Origin , Content-Type , Accept ,Authorization , X-Request-With , cache-control')
                ->header('Access-Control_Allow-Credentials','true');
        }
    }
