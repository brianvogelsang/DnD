function roll() {

    var yourRoll = 0;
    var printout = document.getElementById('printOut');
    
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    
    yourRoll = d1 + d2;
    printout.innerHTML = 'Total: ' + yourRoll;
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