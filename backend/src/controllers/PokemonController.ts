import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@JsonController()
export class PokemonController {
    @Get('/api/pokemon')
    getAll() {
        return 'This action returns all pokemon';
    }

    @Get('/api/pokemon/:id')
    getOne(@Param('id') id: number) {
        return 'This action returns pokemon #' + id;
    }

    @Post('/api/pokemon')
    post(@Body() pokemon: any) {
        return 'Saving pokemon...';
    }

    @Put('/api/pokemon/:id')
    put(@Param('id') id: number, @Body() pokemon: any) {
        return 'Updating a pokemon...';
    }

    @Delete('/api/pokemon/:id')
    remove(@Param('id') id: number) {
        return 'Removing pokemon...';
    }
}