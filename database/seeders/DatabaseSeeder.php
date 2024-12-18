<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('categories')->insert([
            ['id' => 1, 'name' => 'Assignment', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 2, 'name' => 'Record', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 3, 'name' => 'Observation', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
