const connection = require('./../database/connection');
module.exports = {
    async login(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong){
            return response.status(400).json({ error: 'ONG NÃO CADASTRADA!' });
        }

        return response.json(ong);

    }
}