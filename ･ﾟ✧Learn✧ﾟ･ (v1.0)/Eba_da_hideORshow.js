

// BINARNYE_OPERACII BINARNYE_OPERACII BINARNYE_OPERACII BINARNYE_OPERACII BINARNYE_OPERACII BINARNYE_OPERACII BINARNYE_OPERACII


document.getElementById("binOp_1_ID").onclick = function() { 
    if(document.getElementById("binOper_1_ID").style.visibility == "visible"){
        document.getElementById("binOper_1_ID").style = "visibility: hidden; height: 0px;";
    } else {
        document.getElementById("binOper_1_ID").style = "visibility: visible; height: 100px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_2_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_3_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_4_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
    }
}
document.getElementById("binOper_1_ID").onclick = function() { 
    document.getElementById("binOper_1_ID").style = "visibility: hidden; height: 0px;";
}
document.getElementById("binOp_2_ID").onclick = function() { 
    if(document.getElementById("binOper_2_ID").style.visibility == "visible"){
        document.getElementById("binOper_2_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
    } else {
        document.getElementById("binOper_2_ID").style = "visibility: visible; height: 100px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_1_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_3_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_4_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
    }
}
document.getElementById("binOper_2_ID").onclick = function() { 
    document.getElementById("binOper_2_ID").style = "visibility: hidden; height: 0px;";
}
document.getElementById("binOp_3_ID").onclick = function() { 
    if(document.getElementById("binOper_3_ID").style.visibility == "visible"){
        document.getElementById("binOper_3_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
    } else {
        document.getElementById("binOper_3_ID").style = "visibility: visible; height: 160px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_2_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_1_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_4_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
    }
}
document.getElementById("binOper_3_ID").onclick = function() { 
    document.getElementById("binOper_3_ID").style = "visibility: hidden; height: 0px;";
}
document.getElementById("binOp_4_ID").onclick = function() { 
    if(document.getElementById("binOper_4_ID").style.visibility == "visible"){
        document.getElementById("binOper_4_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
    } else {
        document.getElementById("binOper_4_ID").style = "visibility: visible; height: 190px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_2_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_3_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
        document.getElementById("binOper_1_ID").style = "visibility: hidden; height: 0px; background-color: rgb(243, 241, 236); cursor: pointer;";
    }
}
document.getElementById("binOper_4_ID").onclick = function() { 
    document.getElementById("binOper_4_ID").style = "visibility: hidden; height: 0px;";
}
document.getElementById("binOp_5_ID").onclick = function() { 
    if(document.getElementById("binOper_5_ID").style.visibility == "visible"){
        document.getElementById("binOper_5_ID").style = "visibility: hidden; width: 0px;";
    } else {
        document.getElementById("binOper_5_ID").style = "visibility: visible; width: 650px; background-color: rgb(243, 241, 236); cursor: pointer;";
    }
}
document.getElementById("binOper_5_ID").onclick = function() { 
    document.getElementById("binOper_5_ID").style = "visibility: hidden; width: 0px;";
}




// LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC LOGIC 



// ------------------- NOT 
document.getElementById("not_in_ID").onclick = function() {
    if(document.getElementById("not_in_ID").innerHTML == "1") {
        document.getElementById("not_in_ID").innerHTML = "0";
    } else { document.getElementById("not_in_ID").innerHTML = "1"; }

    if(document.getElementById("not_in_ID").innerHTML == "1") {
        document.getElementById("not_out_ID").innerHTML = "0";
    } else { document.getElementById("not_out_ID").innerHTML = "1"; }
}
document.getElementById("not2_in_ID").onclick = function() {
    if(document.getElementById("not2_in_ID").innerHTML == "1") {
        document.getElementById("not2_in_ID").innerHTML = "0";
    } else { document.getElementById("not2_in_ID").innerHTML = "1"; }

    if(document.getElementById("not2_in_ID").innerHTML == "1") {
        document.getElementById("not2_out_ID").innerHTML = "0";
    } else { document.getElementById("not2_out_ID").innerHTML = "1"; }
}

// ------------------- AND
document.getElementById("and_in1_ID").onclick = function() {
    if(document.getElementById("and_in1_ID").innerHTML == "1") {
        document.getElementById("and_in1_ID").innerHTML = "0";
    } else { document.getElementById("and_in1_ID").innerHTML = "1"; }

    if(document.getElementById("and_in1_ID").innerHTML == "1" && document.getElementById("and_in2_ID").innerHTML == "1") {
        document.getElementById("and_out_ID").innerHTML = "1";
    } else { document.getElementById("and_out_ID").innerHTML = "0"; }
}

document.getElementById("and_in2_ID").onclick = function() {
    if(document.getElementById("and_in2_ID").innerHTML == "1") {
        document.getElementById("and_in2_ID").innerHTML = "0";
    } else { document.getElementById("and_in2_ID").innerHTML = "1"; }

    if(document.getElementById("and_in1_ID").innerHTML == "1" && document.getElementById("and_in2_ID").innerHTML == "1") {
        document.getElementById("and_out_ID").innerHTML = "1";
    } else { document.getElementById("and_out_ID").innerHTML = "0"; }
}

document.getElementById("and2_in1_ID").onclick = function() {
    if(document.getElementById("and2_in1_ID").innerHTML == "1") {
        document.getElementById("and2_in1_ID").innerHTML = "0";
    } else { document.getElementById("and2_in1_ID").innerHTML = "1"; }

    if(document.getElementById("and2_in1_ID").innerHTML == "1" && document.getElementById("and2_in2_ID").innerHTML == "1") {
        document.getElementById("and2_out_ID").innerHTML = "1";
    } else { document.getElementById("and2_out_ID").innerHTML = "0"; }
}

document.getElementById("and2_in2_ID").onclick = function() {
    if(document.getElementById("and2_in2_ID").innerHTML == "1") {
        document.getElementById("and2_in2_ID").innerHTML = "0";
    } else { document.getElementById("and2_in2_ID").innerHTML = "1"; }

    if(document.getElementById("and2_in1_ID").innerHTML == "1" && document.getElementById("and2_in2_ID").innerHTML == "1") {
        document.getElementById("and2_out_ID").innerHTML = "1";
    } else { document.getElementById("and2_out_ID").innerHTML = "0"; }
}

// ------------------- NAND
document.getElementById("nand_in1_ID").onclick = function() {
    if(document.getElementById("nand_in1_ID").innerHTML == "1") {
        document.getElementById("nand_in1_ID").innerHTML = "0";
    } else { document.getElementById("nand_in1_ID").innerHTML = "1"; }

    if(document.getElementById("nand_in1_ID").innerHTML == "1" && document.getElementById("nand_in2_ID").innerHTML == "1") {
        document.getElementById("nand_out_ID").innerHTML = "0";
    } else { document.getElementById("nand_out_ID").innerHTML = "1"; }
}

document.getElementById("nand_in2_ID").onclick = function() {
    if(document.getElementById("nand_in2_ID").innerHTML == "1") {
        document.getElementById("nand_in2_ID").innerHTML = "0";
    } else { document.getElementById("nand_in2_ID").innerHTML = "1"; }

    if(document.getElementById("nand_in1_ID").innerHTML == "1" && document.getElementById("nand_in2_ID").innerHTML == "1") {
        document.getElementById("nand_out_ID").innerHTML = "0";
    } else { document.getElementById("nand_out_ID").innerHTML = "1"; }
}

document.getElementById("nand2_in1_ID").onclick = function() {
    if(document.getElementById("nand2_in1_ID").innerHTML == "1") {
        document.getElementById("nand2_in1_ID").innerHTML = "0";
    } else { document.getElementById("nand2_in1_ID").innerHTML = "1"; }

    if(document.getElementById("nand2_in1_ID").innerHTML == "1" && document.getElementById("nand2_in2_ID").innerHTML == "1") {
        document.getElementById("nand2_out_ID").innerHTML = "0";
    } else { document.getElementById("nand2_out_ID").innerHTML = "1"; }
}

document.getElementById("nand2_in2_ID").onclick = function() {
    if(document.getElementById("nand2_in2_ID").innerHTML == "1") {
        document.getElementById("nand2_in2_ID").innerHTML = "0";
    } else { document.getElementById("nand2_in2_ID").innerHTML = "1"; }

    if(document.getElementById("nand2_in1_ID").innerHTML == "1" && document.getElementById("nand2_in2_ID").innerHTML == "1") {
        document.getElementById("nand2_out_ID").innerHTML = "0";
    } else { document.getElementById("nand2_out_ID").innerHTML = "1"; }
}

// ------------------- OR
document.getElementById("or_in1_ID").onclick = function() {
    if(document.getElementById("or_in1_ID").innerHTML == "1") {
        document.getElementById("or_in1_ID").innerHTML = "0";
    } else { document.getElementById("or_in1_ID").innerHTML = "1"; }

    if(document.getElementById("or_in1_ID").innerHTML == "1" || document.getElementById("or_in2_ID").innerHTML == "1") {
        document.getElementById("or_out_ID").innerHTML = "1";
    } else { document.getElementById("or_out_ID").innerHTML = "0"; }
}

document.getElementById("or_in2_ID").onclick = function() {
    if(document.getElementById("or_in2_ID").innerHTML == "1") {
        document.getElementById("or_in2_ID").innerHTML = "0";
    } else { document.getElementById("or_in2_ID").innerHTML = "1"; }

    if(document.getElementById("or_in1_ID").innerHTML == "1" || document.getElementById("or_in2_ID").innerHTML == "1") {
        document.getElementById("or_out_ID").innerHTML = "1";
    } else { document.getElementById("or_out_ID").innerHTML = "0"; }
}

document.getElementById("or2_in1_ID").onclick = function() {
    if(document.getElementById("or2_in1_ID").innerHTML == "1") {
        document.getElementById("or2_in1_ID").innerHTML = "0";
    } else { document.getElementById("or2_in1_ID").innerHTML = "1"; }

    if(document.getElementById("or2_in1_ID").innerHTML == "1" || document.getElementById("or2_in2_ID").innerHTML == "1") {
        document.getElementById("or2_out_ID").innerHTML = "1";
    } else { document.getElementById("or2_out_ID").innerHTML = "0"; }
}

document.getElementById("or2_in2_ID").onclick = function() {
    if(document.getElementById("or2_in2_ID").innerHTML == "1") {
        document.getElementById("or2_in2_ID").innerHTML = "0";
    } else { document.getElementById("or2_in2_ID").innerHTML = "1"; }

    if(document.getElementById("or2_in1_ID").innerHTML == "1" || document.getElementById("or2_in2_ID").innerHTML == "1") {
        document.getElementById("or2_out_ID").innerHTML = "1";
    } else { document.getElementById("or2_out_ID").innerHTML = "0"; }
}

// ------------------- NOR
document.getElementById("nor_in1_ID").onclick = function() {
    if(document.getElementById("nor_in1_ID").innerHTML == "1") {
        document.getElementById("nor_in1_ID").innerHTML = "0";
    } else { document.getElementById("nor_in1_ID").innerHTML = "1"; }

    if(document.getElementById("nor_in1_ID").innerHTML == "1" || document.getElementById("nor_in2_ID").innerHTML == "1") {
        document.getElementById("nor_out_ID").innerHTML = "0";
    } else { document.getElementById("nor_out_ID").innerHTML = "1"; }
}

document.getElementById("nor_in2_ID").onclick = function() {
    if(document.getElementById("nor_in2_ID").innerHTML == "1") {
        document.getElementById("nor_in2_ID").innerHTML = "0";
    } else { document.getElementById("nor_in2_ID").innerHTML = "1"; }

    if(document.getElementById("nor_in1_ID").innerHTML == "1" || document.getElementById("nor_in2_ID").innerHTML == "1") {
        document.getElementById("nor_out_ID").innerHTML = "0";
    } else { document.getElementById("nor_out_ID").innerHTML = "1"; }
}

document.getElementById("nor2_in1_ID").onclick = function() {
    if(document.getElementById("nor2_in1_ID").innerHTML == "1") {
        document.getElementById("nor2_in1_ID").innerHTML = "0";
    } else { document.getElementById("nor2_in1_ID").innerHTML = "1"; }

    if(document.getElementById("nor2_in1_ID").innerHTML == "1" || document.getElementById("nor2_in2_ID").innerHTML == "1") {
        document.getElementById("nor2_out_ID").innerHTML = "0";
    } else { document.getElementById("nor2_out_ID").innerHTML = "1"; }
}

document.getElementById("nor2_in2_ID").onclick = function() {
    if(document.getElementById("nor2_in2_ID").innerHTML == "1") {
        document.getElementById("nor2_in2_ID").innerHTML = "0";
    } else { document.getElementById("nor2_in2_ID").innerHTML = "1"; }

    if(document.getElementById("nor2_in1_ID").innerHTML == "1" || document.getElementById("nor2_in2_ID").innerHTML == "1") {
        document.getElementById("nor2_out_ID").innerHTML = "0";
    } else { document.getElementById("nor2_out_ID").innerHTML = "1"; }
}

// ------------------- XOR
document.getElementById("xor_in1_ID").onclick = function() {
    if(document.getElementById("xor_in1_ID").innerHTML == "1") {
        document.getElementById("xor_in1_ID").innerHTML = "0";
    } else { document.getElementById("xor_in1_ID").innerHTML = "1"; }

    if( (document.getElementById("xor_in1_ID").innerHTML == "1" && document.getElementById("xor_in2_ID").innerHTML == "1") || (document.getElementById("xor_in1_ID").innerHTML == "0" && document.getElementById("xor_in2_ID").innerHTML == "0") ) {
        document.getElementById("xor_out_ID").innerHTML = "0";
    } else { document.getElementById("xor_out_ID").innerHTML = "1"; }
}

document.getElementById("xor_in2_ID").onclick = function() {
    if(document.getElementById("xor_in2_ID").innerHTML == "1") {
        document.getElementById("xor_in2_ID").innerHTML = "0";
    } else { document.getElementById("xor_in2_ID").innerHTML = "1"; }

    if( (document.getElementById("xor_in1_ID").innerHTML == "1" && document.getElementById("xor_in2_ID").innerHTML == "1") || (document.getElementById("xor_in1_ID").innerHTML == "0" && document.getElementById("xor_in2_ID").innerHTML == "0") ) {
        document.getElementById("xor_out_ID").innerHTML = "0";
    } else { document.getElementById("xor_out_ID").innerHTML = "1"; }
}

document.getElementById("xor2_in1_ID").onclick = function() {
    if(document.getElementById("xor2_in1_ID").innerHTML == "1") {
        document.getElementById("xor2_in1_ID").innerHTML = "0";
    } else { document.getElementById("xor2_in1_ID").innerHTML = "1"; }

    if( (document.getElementById("xor2_in1_ID").innerHTML == "1" && document.getElementById("xor2_in2_ID").innerHTML == "1") || (document.getElementById("xor2_in1_ID").innerHTML == "0" && document.getElementById("xor2_in2_ID").innerHTML == "0") ) {
        document.getElementById("xor2_out_ID").innerHTML = "0";
    } else { document.getElementById("xor2_out_ID").innerHTML = "1"; }
}

document.getElementById("xor2_in2_ID").onclick = function() {
    if(document.getElementById("xor2_in2_ID").innerHTML == "1") {
        document.getElementById("xor2_in2_ID").innerHTML = "0";
    } else { document.getElementById("xor2_in2_ID").innerHTML = "1"; }

    if( (document.getElementById("xor2_in1_ID").innerHTML == "1" && document.getElementById("xor2_in2_ID").innerHTML == "1") || (document.getElementById("xor2_in1_ID").innerHTML == "0" && document.getElementById("xor2_in2_ID").innerHTML == "0") ) {
        document.getElementById("xor2_out_ID").innerHTML = "0";
    } else { document.getElementById("xor2_out_ID").innerHTML = "1"; }
}

// ------------------- XNOR 
document.getElementById("xnor_in1_ID").onclick = function() {
    if(document.getElementById("xnor_in1_ID").innerHTML == "1") {
        document.getElementById("xnor_in1_ID").innerHTML = "0";
    } else { document.getElementById("xnor_in1_ID").innerHTML = "1"; }

    if( (document.getElementById("xnor_in1_ID").innerHTML == "1" && document.getElementById("xnor_in2_ID").innerHTML == "1") || (document.getElementById("xnor_in1_ID").innerHTML == "0" && document.getElementById("xnor_in2_ID").innerHTML == "0") ) {
        document.getElementById("xnor_out_ID").innerHTML = "1";
    } else { document.getElementById("xnor_out_ID").innerHTML = "0"; }
}

document.getElementById("xnor_in2_ID").onclick = function() {
    if(document.getElementById("xnor_in2_ID").innerHTML == "1") {
        document.getElementById("xnor_in2_ID").innerHTML = "0";
    } else { document.getElementById("xnor_in2_ID").innerHTML = "1"; }

    if( (document.getElementById("xnor_in1_ID").innerHTML == "1" && document.getElementById("xnor_in2_ID").innerHTML == "1") || (document.getElementById("xnor_in1_ID").innerHTML == "0" && document.getElementById("xnor_in2_ID").innerHTML == "0") ) {
        document.getElementById("xnor_out_ID").innerHTML = "1";
    } else { document.getElementById("xnor_out_ID").innerHTML = "0"; }
}

document.getElementById("xnor2_in1_ID").onclick = function() {
    if(document.getElementById("xnor2_in1_ID").innerHTML == "1") {
        document.getElementById("xnor2_in1_ID").innerHTML = "0";
    } else { document.getElementById("xnor2_in1_ID").innerHTML = "1"; }

    if( (document.getElementById("xnor2_in1_ID").innerHTML == "1" && document.getElementById("xnor2_in2_ID").innerHTML == "1") || (document.getElementById("xnor2_in1_ID").innerHTML == "0" && document.getElementById("xnor2_in2_ID").innerHTML == "0") ) {
        document.getElementById("xnor2_out_ID").innerHTML = "1";
    } else { document.getElementById("xnor2_out_ID").innerHTML = "0"; }
}

document.getElementById("xnor2_in2_ID").onclick = function() {
    if(document.getElementById("xnor2_in2_ID").innerHTML == "1") {
        document.getElementById("xnor2_in2_ID").innerHTML = "0";
    } else { document.getElementById("xnor2_in2_ID").innerHTML = "1"; }

    if( (document.getElementById("xnor2_in1_ID").innerHTML == "1" && document.getElementById("xnor2_in2_ID").innerHTML == "1") || (document.getElementById("xnor2_in1_ID").innerHTML == "0" && document.getElementById("xnor2_in2_ID").innerHTML == "0") ) {
        document.getElementById("xnor2_out_ID").innerHTML = "1";
    } else { document.getElementById("xnor2_out_ID").innerHTML = "0"; }
}