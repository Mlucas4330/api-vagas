import { Request, Response } from "express";
import { ListCandidatoVagaUseCase } from "../usecases/list-candidato-vaga.usecase";

export class CandidaturaController {
  public async list(req: Request, res: Response) {
    
    try {

    const {idCandidato} = req.params;

    const usecase = new ListCandidatoVagaUseCase();
    const result = await usecase.execute(idCandidato)

    return res.status(200).send({
      ok: true,
      message: 'Listagem das vagas pelo candidato',
      data: result
    })
      
    } catch (error: any) {
      
      return res.status(500).send({
        ok: false,
        message: error.toString()
      })

    }

  }
}