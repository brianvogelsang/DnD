var yourRoll = 0;
var boxes = [1,2,3,4,5,6,7,8,9];
var score = 0;
var youWin = false;

function reset(){
    youWin = false;
    yourRoll = 0;
    boxes = [1,2,3,4,5,6,7,8,9];
    
    document.getElementById('debug').innerHTML = '';
    
    document.getElementById('printOut').innerHTML = 'Roll the dice';
    
    document.getElementById('roll1Btn').style.display = 'none';
    
    document.getElementById('d1').style.display = 'none';
    document.getElementById('d2').style.display = 'none';
    
    document.getElementById('b1').disabled = false;
    document.getElementById('b2').disabled = false;
    document.getElementById('b3').disabled = false;
    document.getElementById('b4').disabled = false;
    document.getElementById('b5').disabled = false;
    document.getElementById('b6').disabled = false;
    document.getElementById('b7').disabled = false;
    document.getElementById('b8').disabled = false;
    document.getElementById('b9').disabled = false;
}

function roll2(){
    
    if(youWin == true) {
        reset();
    }
    
    if(yourRoll ==0){
        score = boxes.reduce((a, b) => a + b, 0)
        document.getElementById('debug').innerHTML = 'Score: -' + score;
    
        var printout = document.getElementById('printOut');
    
        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
    
        document.getElementById('d1').innerHTML = d1;
        document.getElementById('d2').innerHTML = d2;
    
        document.getElementById('d1').style.display = 'flex';
        document.getElementById('d2').style.display = 'flex';
    
        if(yourRoll == 0){
            yourRoll = d1 + d2;
            document.getElementById('printOut').innerHTML = 'Dice Total: ' + yourRoll;
    
        }
    }
        
}

function roll1(){
    if(youWin == true) {
        reset();
    }
    
    if(yourRoll ==0){
        score = boxes.reduce((a, b) => a + b, 0)
        document.getElementById('debug').innerHTML = 'Score: -' + score;
    
    
        var printout = document.getElementById('printOut');
    
        var d1 = Math.floor(Math.random() * 6) + 1;
    
        document.getElementById('d1').innerHTML = d1;
    
        document.getElementById('d1').style.display = 'flex';
  
    
        if(yourRoll == 0){
            yourRoll = d1;
            document.getElementById('printOut').innerHTML = 'Dice Total: ' + yourRoll;
    
        }
    }
}

function press(str){
    x = str[1];
    
   
    
    if(yourRoll - x >= 0){
        yourRoll = yourRoll - x;
        boxes[x-1] = 0;
        document.getElementById(str).disabled = true;
        if(yourRoll == 0){
            score = boxes.reduce((a, b) => a + b, 0)
            document.getElementById('debug').innerHTML = 'Score: -' + score;
            document.getElementById('printOut').innerHTML = 'Roll the dice';
    
            document.getElementById('d1').style.display = 'none';
            document.getElementById('d2').style.display = 'none';
            
            if(score == 0){
                document.getElementById('debug').innerHTML = 'YOU WIN';
            }
        }
    }
    
    if(yourRoll > 0){document.getElementById('printOut').innerHTML = 'Dice Total: ' + yourRoll;}
    
    if(boxes[6] + boxes[7] + boxes[8] == 0){
        document.getElementById('roll1Btn').style.display = 'block';
        
        
    
    
    }
}
   

/*
#! python3
import random

global yourRoll
yourRoll = 0
doors = list(range(1,10))

def roll_dice():
    global yourRoll
    d1 = random.randint(1,6)
    d2 = random.randint(1,6)
    yourRoll = d1+d2
    print(f'You rolled a {d1} and a {d2}. The total is {yourRoll}.')
    if doors:
        input_response()

def input_response():
    global yourRoll
    while yourRoll > 0:
        print (doors)
        response = input(f'Please close an amount of doors equal to {yourRoll}.\n')
        response = int(response)
        if response in doors:
            doors.remove(response)
            yourRoll = yourRoll - response
        else:    
            print(f'{response} is not an available door.')    
    
    if yourRoll == 0:
        roll_dice()
    else:
        print('Not a valid move.')
        yourRoll = yourRoll + response
        doors.append(response)
        doors.sort()
        input_response()

if __name__ == "__main__":
    roll_dice()
*/