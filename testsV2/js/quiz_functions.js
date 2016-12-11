/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
var useranswers = new Array();
var rightanswers = new Array();
var wronganswers = new Array();
var dkanswers = new Array();

var rightanswersPerBlock = initBloquesMap();
var wronganswersPerBlock = initBloquesMap();
var dkanswersPerBlock = initBloquesMap();

var rightanswersPerUnit = initTemasArray();
var wronganswersPerUnit = initTemasArray();
var dkanswersPerUnit = initTemasArray();

//Señala en qué pregunta se ha destapado la respuesta
var revealed = new Array();

//var answered = 0;

function clearVariables()
{
    rightanswers = new Array();
    wronganswers = new Array();
    dkanswers = new Array();

    rightanswersPerBlock = initBloquesMap();
    wronganswersPerBlock = initBloquesMap();
    dkanswersPerBlock = initBloquesMap();

    rightanswersPerUnit = initTemasArray();
    wronganswersPerUnit = initTemasArray();
    dkanswersPerUnit = initTemasArray();
}

function renderQuiz() {
    for (var i = 0; i < questions.length; i++) {
        /*
		document.writeln('<p class="question" id="question_'+i+'">' + questions[i] + ' <span id="result_' + i + '"></span> <span class="revealAnswer" id="revealAnswer_'+i+'"><a href="javascript:revealAnswer('+i+')"> Ver respuesta </a></span> <span id="limpiar_'+i+'"></span><span  class="info"  id="info_' + i + '"></span></p>');
		var letra = 97; // Letra a en ASCII
		for(j=0;j<choices[i].length;j++)
		{
			document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', ' + j + ', \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + String.fromCharCode(letra) + ') ' + choices[i][j] + '</label><br />');
			letra = letra +1;
		}
        */
        document.writeln('<div class="jumbotron">');
        document.writeln('<div id="question_' + i + '"><strong>' + questions[i] + ' <span id="result_' + i + '"></span> <span class="revealAnswer" id="revealAnswer_' + i + '"><a href="javascript:revealAnswer(' + i + ')"> Ver respuesta </a></span> <span id="limpiar_' + i + '"></span><span  class="info"  id="info_' + i + '"></span></strong></div>');
        var letra = 97; // Letra a en ASCII
        for (j = 0; j < choices[i].length; j++) {
            document.writeln('<div class="radio">');
            document.writeln('<label>');
            document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', ' + j + ', \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><strong id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + String.fromCharCode(letra) + ') ' + choices[i][j] + '</strong>');
            document.writeln('</label>');
            document.writeln('</div>');
            letra = letra + 1;
        }
        document.writeln('</div>');
        useranswers[i] = -1;
    }
}

function revealAnswer(questionNumber) {
    document.getElementById('revealAnswer_' + questionNumber).innerHTML = '<a href="javascript:hideAnswer(' + questionNumber + ')">Ocultar respuesta</a>';
    revealed[questionNumber] = 1;
    correctQuestion(questionNumber);
}

function hideAnswer(questionNumber) {
    document.getElementById('revealAnswer_' + questionNumber).innerHTML = '<a href="javascript:revealAnswer(' + questionNumber + ')">Ver respuesta</a>';
    resetQuestion(questionNumber);
    revealed[questionNumber] = 0;
}
function showSolutions() {
    for (var i = 0; i < questions.length; i++) {
        correctQuestion(i);
    }
}

function correctQuiz(testID) {
    hideAllClearOptions();
    hideAllRevealOptions();
    clearVariables();

    for (var i = 0; i < questions.length; i++) {
        correctQuestion(i);
    }

    disableQuestions();
    showResult();

    var testRst = {
        testID: testID,
        fecha: new Date(),
        aciertos: rightanswers.length,
        fallos: wronganswers.length,
        nc: dkanswers.length,
        score: computeScore(rightanswers.length, wronganswers.length, dkanswers.length),
        listaAciertos: rightanswers,
        listaFallos: wronganswers,
        listaNC: dkanswers,
        listaAciertosPorBloque: rightanswersPerBlock,
        listaFallosPorBloque: wronganswersPerBlock,
        listaNCPorBloque: dkanswersPerBlock,
        listaAciertosPorTema: rightanswersPerUnit,
        listaFallosPorTema: wronganswersPerUnit,
        listaNCPorTema: dkanswersPerUnit,
    };
    addTestRealization(testRst);
}


function correctQuestion(questionNumber) {
    var optionsCount = choices[questionNumber].length;

    if (useranswers[questionNumber] == -1)
        document.getElementById('question_' + questionNumber).className = "question nc";

    for (var i = 0; i < optionsCount; i++) {
        if (answers[questionNumber] == choices[questionNumber][i]) {
            if (useranswers[questionNumber] != -1) {
                if (choices[questionNumber][i] == useranswers[questionNumber])
                    document.getElementById('label_' + questionNumber + '_' + i).className = "bien";
                else
                    document.getElementById('label_' + questionNumber + '_' + i).className = "opcion_corregida";
            }
            else {
                document.getElementById('label_' + questionNumber + '_' + i).className = "nc";
                document.getElementById('label_' + questionNumber + '_' + i).className = "opcion_corregida";
            }
            if (choices[questionNumber][i] == useranswers[questionNumber])
                document.getElementById('question_' + questionNumber).className = "question bien";
        }
        else {
            if (choices[questionNumber][i] == useranswers[questionNumber] && useranswers[questionNumber] != -1) {
                document.getElementById('label_' + questionNumber + '_' + i).className = "opcion_mal";
                document.getElementById('question_' + questionNumber).className = "question mal";
            }
        }
    }

    if (useranswers[questionNumber] == -1) {
        document.getElementById('result_' + questionNumber).innerHTML = '[N/C]';
        dkanswers.push(preguntaids[questionNumber]);
        for (u = 0; u < units[questionNumber].length; u++) {
                var b = units[questionNumber][u];
                dkanswersPerUnit[b] = dkanswersPerUnit[b] + 1;
        }
        for (u = 0; u < blocks[questionNumber].length; u++) {
            var b = blocks[questionNumber][u];
            dkanswersPerBlock[b] = dkanswersPerBlock[b] + 1;
        }
    }
    else
        if (answers[questionNumber] == useranswers[questionNumber]) {
            document.getElementById('result_' + questionNumber).innerHTML = '[BIEN]';
            rightanswers.push(preguntaids[questionNumber]);
            for (u = 0; u < units[questionNumber].length; u++) {
                var b = units[questionNumber][u];
                rightanswersPerUnit[b] = rightanswersPerUnit[b] + 1;
            }
            for (u = 0; u < blocks[questionNumber].length; u++) {
                var b = blocks[questionNumber][u];
                rightanswersPerBlock[b] = rightanswersPerBlock[b] + 1;
            }

        }
        else {
            document.getElementById('result_' + questionNumber).innerHTML = '[MAL]';
            wronganswers.push(preguntaids[questionNumber]);
            for (u = 0; u < units[questionNumber].length; u++) {
                var b = units[questionNumber][u];
                wronganswersPerUnit[b] = wronganswersPerUnit[b] + 1;
            }
            for (u = 0; u < blocks[questionNumber].length; u++) {
                var b = blocks[questionNumber][u];
                wronganswersPerBlock[b] = wronganswersPerBlock[b] + 1;
            }
        }
    var info = '';
    if (units[questionNumber] != '')
        info = '<br/>Tema: ' + units[questionNumber];
    if (comments[questionNumber] != '')
        info = info + '. ' + comments[questionNumber];
    document.getElementById('info_' + questionNumber).innerHTML = info;

}

function disableQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var optionsCount = choices[i].length;
        for (var j = 0; j < optionsCount; j++) {
            document.getElementById('answer_' + i + '_' + j).disabled = true;

        }
    }
}


function resetQuiz() {
    if (!confirm('¿Seguro que desea reiniciar?'))
        return false;

    document.location = document.location;
}

function submitAnswer(questionId, choiceId, classId, labelId) {
    useranswers[questionId] = choices[questionId][choiceId];
    showClearOption(questionId);

    // Si está mostrada la respuesta, entonces directamente lo corregimos
    if (revealed[questionId] == 1) {
        resetQuestion(questionId);
        correctQuestion(questionId);
    }
    //	document.getElementById(labelId).style.fontWeight = "bold";
    //	disableQuestion(classId);
    //	showResult(questionId);
    //	answered++; 
}

function showClearOption(questionId) {
    document.getElementById('limpiar_' + questionId).innerHTML = '<a href="javascript:clearQuestion(' + questionId + ')">No contestar</a>';
}

function clearQuestion(questionId) {
    hideClearOption(questionId);

    for (var respuesta = 0; respuesta < choices[questionId].length; respuesta++) {
        document.getElementById('answer_' + questionId + '_' + respuesta).checked = false;
    }

    useranswers[questionId] = -1;

    // Esto es para resetear el estilo.Primero reseteamos 
    if (revealed[questionId] == 1) {
        resetQuestion(questionId);
        correctQuestion(questionId);
    }
}

// Inicializa la pregunta, tanto stilo como respuestas y mensajes
function resetQuestion(questionId) {
    var optionsCount = choices[questionId].length;

    for (var i = 0; i < optionsCount; i++) {
        //document.getElementById('answer_'+questionId+'_'+i).checked = false;
        document.getElementById('label_' + questionId + '_' + i).className = "";
        document.getElementById('question_' + questionId).className = "question";
    }

    //document.getElementById('limpiar_' + questionId).innerHTML = '';
    document.getElementById('result_' + questionId).innerHTML = "";
    document.getElementById('info_' + questionId).innerHTML = "";

    //useranswers[questionId] =-1;	
}

function hideClearOption(questionId) {
    document.getElementById('limpiar_' + questionId).innerHTML = '';
}

function hideAllClearOptions(questionId) {
    for (var i = 0; i < questions.length; i++) {
        if (useranswers[i] != -1)
            hideClearOption(i);
    }
}

function hideRevealOption(questionId) {
    document.getElementById('revealAnswer_' + questionId).innerHTML = '';
}

function hideAllRevealOptions(questionId) {
    for (var i = 0; i < questions.length; i++) {
        hideRevealOption(i);
    }
}



function showResult() {
    var correctCount = 0;
    var incorrectCount = 0;
    var ncCount = 0;
    var totalCount = questions.length;

    for (var i = 0; i < totalCount; i++) {
        if (useranswers[i] == answers[i])
            correctCount++;
        else
            if (useranswers[i] != -1)
                incorrectCount++;
    }

    ncCount = totalCount - (correctCount + incorrectCount);

    var score = computeScore(correctCount, incorrectCount, ncCount);

    document.getElementById('preguntas_bien').innerHTML = '' + correctCount;
    document.getElementById('preguntas_mal').innerHTML = '' + incorrectCount;
    document.getElementById('preguntas_NC').innerHTML = '' + ncCount;
    document.getElementById('preguntas_total').innerHTML = '' + score;
}

function go() {
    var box = document.getElementById('test_navigation');
    var destination = box.options[box.selectedIndex].value;
    if (destination) location.href = destination;
}

function computeScore(right, wrong, nc)
{
   return (right - (wrong * 0.5));
}