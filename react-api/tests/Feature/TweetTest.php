<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TweetTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetTweets()
    {
        $response = $this->json('GET','/api/tweet');
        $response   ->assertStatus(200)
                    ->assertJsonStructure([ 
                        "*" =>
                            [
                            "id",
                            "user_id",
                            "description",
                            "type",
                            "resource_id",
                            "created_at",
                            "updated_at"
                            ]
                    ]);
    }

    public function testPostTweets()
    {
        $response = $this->json('POST','/api/tweet',[
            "user_id" => 1,
            "description" => "Hola Mundo Desde React.js!",
            "type" => 1
        ]);
        
        $response->assertStatus(200);
    }
}
