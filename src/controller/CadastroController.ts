import { Request, Response } from 'express';


export default {
    async create (req: Request, res: Response){
        const {name, cpf} = req.body;
        const data = {cpf,name};
        
        return res.status(201).json({ data:data});
    },

    async list (req: Request, res: Response) {
        const result = await knex ('tab_cadastro').orderBy('name');
        return res.status(200).json({ data:result})
    },

    async find (req: Request, res: Response) {
        const { id } = req.params;        
        
    },

    async update (req: Request, res: Response) {
        const { id } = req.params;
        const {name, cpf} = req.body;
        const data = {name, cpf};
        
        const user = 
        return res.status(201).json({ data:user});
    },

    async delete(req: Request, res: Response){
        const { id } = req.params;
        
        return res.status(200).json({message: 'Registro excluido com sucesso'});
    },
}