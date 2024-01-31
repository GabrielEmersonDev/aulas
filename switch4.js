// Peça ao usuário para inserir uma temperatura em graus Celsius.
// Utilize a instrução switch para classificar a temperatura como baixa, média ou alta.

const temperatura = 30;

switch (true) {
  case temperatura >= 30:
    {
      console.log(`Temperatura está quente, são exatos ${temperatura}`);
    }
    break;
  case temperatura <= 10:
    {
      console.log(`Temperatura está frio, são exatos ${temperatura}`);
    }
    break;
  case temperatura <= 31 && temperatura >= 11:
    {
      console.log(`Temperatura está amena, são exatos ${temperatura}`);
    }
    break;

  default:
    console.log("Insira uma temperatura válida.");
    break;
}
