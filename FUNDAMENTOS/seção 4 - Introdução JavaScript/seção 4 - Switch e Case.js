const status = "lista";

switch(status) {
    case 'aprovada':
        console.log("parabéns, você foi aprovadx!");
        break;
    case 'lista':
        console.log ("você está na lista de espera");
        break;
    case 'reprovada':
        console.log ("você foi reprovadx");
        break;
    default:
        console.log("Iformação incorreta");
        break;            
}
