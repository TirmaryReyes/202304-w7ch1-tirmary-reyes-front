# Robot Management App

## Data layer

### Data

- Collection of Robots (robots[ ])
- Robot: { }
  - id: number
  - name: string
  - image: string
  - Characteristics {
    - speed: number (0-10)
    - endurance: number (0-10)
    - createdDate: Date
      }

### Modifications

- addRobot()
- removeRobot()
- updateRobot()
- loadRobots()

## Components

### Store

#### State

- Collection of Robots

#### RobotsReducer

- addRobot()
- removeRobot()
- updateRobot()
- loadRobots()

### App

- Receives an external collection of Robots
- Receives dispatch()
- Renders a RobotFormm component
- Renders a RobotsList component

### RobotForm

- State:
  - Robot
- handleSubmit()
- Receives dispatch()
- Shows inputs for the details of the Robot
- Renders a Button component with
  - text: "create" / "modify"
  - actionOnClick: handleSubmit

### RobotsList

- Receives a collection of Robots from props
- Renders as many RobotCard as Robots are in the collection

### RobotCard

- Receives a Robot
- Receives dispatch()
- handleClick()
- Shows the Robot's name, image, speed, endurance, and created date
- Renders a Button with:
  - text: "delete"
  - actionOnClick: handleClick

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked
