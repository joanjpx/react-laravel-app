<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Tweet;
use Faker\Generator as Faker;

$factory->define(Tweet::class, function (Faker $faker) {
    return [
        "user_id" =>  $faker->numberBetween($min = 1,$max = 20),
        "description" => $faker->realText($maxNbChars = 200, $indexSize = 2),
        "type" => 1
    ];
});
