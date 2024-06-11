// JSDOCS para fazer tipagem no js.

/**
 *
 * @argument usuario {{ anoQueNasceu: number }}
 *
 */

function calcularIdadeUsuario2(usuario) {
  if (usuario.anoQueNasceu >= 2024) {
    return "Ano inválido.";
  }

  return 2024 - usuario.anoQueNasceu;
}
