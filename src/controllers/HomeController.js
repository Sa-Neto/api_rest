import Aluno from '../models/Aluno';

class TokenController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'Maria@gmail.com',
      idade: 23,
      peso: 57,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new TokenController();
