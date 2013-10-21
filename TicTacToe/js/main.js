/*jslint browser:true */
/*global $:false,alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
//
$(function () {
    "use strict";
    var display, isButtonEmpty, isBoardFull, setMark, checkForWinner, isDraw, players, isGameOver, turn, resetButtons, displayWin;
    players = ["X", "O"];
    isGameOver = false;
    turn = 0;
    display = function (message) {
        $("#turn").text(message);
    };
    displayWin = function (message) {
        $("#win").text(message).show(2000);
    };
    isButtonEmpty = function (input) {
        return ($(input).val().length) === 0;
    };
    isBoardFull = function () {
        var boardfull = 0;
        $("input").each(function () {
            if ($(this).val().length === 1) {
                boardfull += 1;
            }
        });
        return (boardfull === 9);
    };
    setMark = function (input, mark) {
        $(input).val(mark);
    };
    checkForWinner = function (players, turn) {
        if ((($("#box1").val()) === players[turn]) && (($("#box2").val()) === players[turn]) && (($("#box3").val()) === players[turn])) {
            return true;
        }
        if ((($("#box4").val()) === players[turn]) && (($("#box5").val()) === players[turn]) && (($("#box6").val()) === players[turn])) {
            return true;
        }
        //
        if ((($("#box7").val()) === players[turn]) && (($("#box8").val()) === players[turn]) && (($("#box9").val()) === players[turn])) {
            return true;
        }
        //
        if ((($("#box1").val()) === players[turn]) && (($("#box4").val()) === players[turn]) && (($("#box7").val()) === players[turn])) {
            return true;
        }
        //
        if ((($("#box2").val()) === players[turn]) && (($("#box5").val()) === players[turn]) && (($("#box8").val()) === players[turn])) {
            return true;
        }
        //turn
        if ((($("#box3").val()) === players[turn]) && (($("#box6").val()) === players[turn]) && (($("#box9").val()) === players[turn])) {
            return true;
        }
        //
        if ((($("#box1").val()) === players[turn]) && (($("#box5").val()) === players[turn]) && (($("#box9").val()) === players[turn])) {
            return true;
        }
        //
        if ((($("#box3").val()) === players[turn]) && (($("#box5").val()) === players[turn]) && (($("#box7").val()) === players[turn])) {
            return true;
        }
        return false;
    };
    //
    isDraw = function (players, turn) {
        return (!checkForWinner(players, turn)) && isBoardFull();
    };
    resetButtons = function () {
        $("#reset").click(function () {
            $("input").val("");
            turn = 0;
            isGameOver = false;
            $("#turn").show();
            displayWin("");
            display("Player  " + players[turn] + "  turn ");
            display("Player 'X' begins");
        });
    };
    //--------------------------------------
    display("Player 'X' begins");
    if (!isBoardFull()) {
        $("input").click(function () {
            if (!isGameOver) {
                if (!isDraw(players, turn)) {
                    if (!isButtonEmpty($(this))) {
                        displayWin("Try again");
                        $("#win").hide(2000);
                    } else {
                        setMark($(this), players[turn]);
                        if (checkForWinner(players, turn)) {
                            isGameOver = checkForWinner(players, turn);
                            displayWin("Player " + players[turn] + " WINS!");
                            $("#turn").hide();
                        } else if (isDraw(players, turn)) {
                            displayWin(" DRAW! ");
                            $("#turn").hide();
                        }
                        turn = turn + 1;
                        turn = turn % 2;
                    }
                    display("Player  " + players[turn] + "  turn ");
                }
            }
            resetButtons();
        });
    }
});
//