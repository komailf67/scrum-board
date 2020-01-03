<?php

    use Illuminate\Http\Request;

    /*
    |--------------------------------------------------------------------------
    | API Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register API routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | is assigned the "api" middleware group. Enjoy building your API!
    |
    */
//    Route::view('/', 'app.index');
    Auth::routes();


//Route::group(['middleware' => 'api-header'], function () {
//
//    // The registration and login requests doesn't come with tokens
//    // as users at that point have not been authenticated yet
//    // Therefore the jwtMiddleware will be exclusive of them
//    Route::post('user/login', 'UserController@login');
//    Route::post('user/register', 'UserController@register');
//});

    Route::group([
        'prefix' =>'user',
        'namespace'=>'User'
    ],
        function (){
            Route::post('register', 'AuthController@register');
            Route::post('login', 'AuthController@login');
            
        }
    );
    

    Route::group(['middleware' => ['jwt.verify']], function() {
        Route::get('logout', 'User\AuthController@logout');
        Route::get('/', 'HomeController@getProjects');
        Route::get('/is-token-valid', 'User\AuthController@isTokenValid');
    });
