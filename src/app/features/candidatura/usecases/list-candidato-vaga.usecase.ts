import { CandidaturaModel } from "../../../models/candidatura.model";
import { CandidaturaRepository } from "../repositories/candidatura.repository";

export class ListCandidatoVagaUseCase {
  public async execute(idCandidato: string) {
    const repostiroy = new CandidaturaRepository();
    const result = await repostiroy.find(idCandidato);

    if(!result) {
      return null
    }

    return result.map(item => {
      return item.toJson();
    })
  }
}