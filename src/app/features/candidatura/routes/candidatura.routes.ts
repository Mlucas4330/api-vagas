import { Router } from "express"
import { CandidatoController } from "../../candidato/controllers/candidato.controller";
import { CandidaturaController } from "../controller/candidatura.controller";

export const candidaturaRoutes = () => {
  const router = Router();

  router.get('/:idCandidato', new CandidaturaController().list);

  return router;
}