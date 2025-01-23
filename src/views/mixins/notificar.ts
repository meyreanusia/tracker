import { TipoNotificacao } from "@/interfaces/INotificacao";
import { NOTIFICAR } from "@/store/tipo-de-mutacoes";
import { store } from '@/store'

export const notificacaoMixin = {
  methods: {
    notificar(tipo: TipoNotificacao, title: string, texto: string): void {
      store.commit(NOTIFICAR, {
        title,
        texto,
        tipo,
      });
    },
  },
}
