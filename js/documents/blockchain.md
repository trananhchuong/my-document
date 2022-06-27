
### Smart contract:
    - Smart contracts are programs stored inside a blockchain
    - They specify the rules and behavior for how digital assets are transferred

### Solidity:
    - Solidity smart contracts will be deployed to and run in a virtual environment
  #### All Solidity contracts typically include:
    - Pragma directives
    - State variables
    - Functions
    - Events
  #### Reference types 
  #### Variable Types:
    1. Primitive Types
    2. Structure
    3. Arrays: fixed arrays and dynamic arrays
    4. You can declare an array as public, and Solidity will automatically create a getter method for it
   
   #### Function Declarations: 
   
   power bunker convince sure cliff shallow high flight wave ritual speak struggle
<!-- 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract MiniGame {

    Student[] public studentList;

    uint public sumMoney;

    struct Student{
        string _ID;
        address _WALLET;
    }

    event SM_shoot_data(address _wallet, string _id);

    function Register(string memory _id) public {
        Student memory newStudent = Student(_id, msg.sender);
        studentList.push(newStudent);

        emit SM_shoot_data(msg.sender, _id);
    }

    function ReChangre() public payable {
       sumMoney = sumMoney + msg.value;
    }

}



 -->