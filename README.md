# Twitter Demo v-2

**Twitter Demo** is the representing of Twitter and it's operations. This is version 2 of Twitter Demo I've made.Basic operations are write,update,delete tweet.Also search user from databases in the search section of Twitter Demo App.

*Difference from previous demos I've made are :*

- I've been added real time databases with **firebase**
- I've supplied to *hold user email and password* on login form and *auto-enter* to app with **redux-persist**
- I've ensured update or deleted tweet you wrote
- Search user from databases in the search section
- Also,I've supplied to send params between different pages with *react-navigation*
```JavaScript
<Text>
...
onPress = {() => {
this.props.navigation.navigate("Inside",{
  email : item.email
})
}} 
</Text>

```

- Or you can use NavigationServices to routing
```JavaScript
import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
```
- Assing it to reference of *NavigationContainer*
```JavaScript
<NavigationContainer ref={navigationRef}>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
````

- Routing to main page after the wrote tweet
```JavaScript
const loginSuccess = (dispatch, user) => {
    dispatch({
        type: USER_SUCCESS,
        payload: user
    })
    NavigationServices.navigate("Inside");
}
```

- Also,I've added tabbar navigation with *react-navigation*
```JavaScript
 <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Main') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home';
                } else if (route.name === 'Search') {
                    iconName = focused ? 'ios-search' : 'ios-search';
                }
                else if (route.name === 'Notification') {
                    iconName = focused ? 'ios-notifications-outline' : 'ios-notifications-outline';
                }
                else if (route.name === 'Messages') {
                    iconName = focused ? 'ios-mail' : 'ios-mail';
                }

                
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'rgb(29,161,242)',
            inactiveTintColor: 'gray',
            showLabel: false,
            style : {
                backgroundColor : "black"
            }          
        }}
        ...
```

*Some inabilities according to Real Twitter:*
- Notifications and Messages are not dynamic
- Some dataframe operations might be slowly because of the *firebase*

## Badges


# Images from App
<br><br>

 <table>
  <tr>
   <td><img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-012350.jpg" align="left" width = "300" height = 650 /></td>
    <td> <img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-012342.jpg" align="right" width = "300" height = 650 /></td>
    <td><img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-013428.jpg" align="left" width = "300" height = 650 /></td>
   </tr>
  
  <tr>
   <td><img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-013428.jpg" align="left" width = "300" height = 650 /></td>
  <td><img src="https://github.com/Kivanc10/linux_files/blob/master/img/SVID-20210128-010050-1.gif" align="right" width = "300" height = 650 /></td>
  <td><img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210128-005807.jpg" align="left" width = "300" height = 650 /></td>
  
  </tr>
 
  <tr>
  <td><img src = "https://github.com/Kivanc10/linux_files/blob/master/img/SVID-20210127-204928-1.gif" align="right" width = "300" height = 650 /></td>
  <td><img src = "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-013641.jpg" align="left" width = "300" height = 650 /></td>
  <td><img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-012652.jpg" align="right" width = "300" height = 650 /></td>
  </tr>
    
  
  <tr>
  <td><img src = "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-013626.jpg" align="left" width = "300" height = 650 /></td>
  <td><img src= "https://github.com/Kivanc10/linux_files/blob/master/img/IMG_20210128_005721.jpg" align="right" width = "300" height = 650 /></td>
  </tr>

  
  </table>
 

  
## Installation and Using

```JavaScript
"scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  }
```

- git `clone my_git_addresss`
- verify to whether npm have already installed `node –v`
- `npm install --global yarn` 
- If you have not expo `npm install -g expo-cli` or `yarn global add expo-cli`
- Open this repo in your code editor
- Then , `expo start`




















