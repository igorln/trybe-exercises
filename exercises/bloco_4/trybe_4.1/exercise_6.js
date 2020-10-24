let piece = "QUEEN";


switch (piece.toLowerCase()) {
    case "bishop":
        console.log("bishop -> diagonal");
        break;
    case "pawn":
        console.log("pawn > one step forward only");
        break;
    case "rook":
        console.log("rook -> all empty spaces in four lines");
        break;
    case "king":
        console.log("king -> only one space in any direction");
        break;
    case "queen":
        console.log("queen -> all empty spaces in any direction");
        break;
    case "knight":
        console.log("knight -> L-shaped path");
        break;
    default :
        console.log("Error: This piece doesn't exist")
}
