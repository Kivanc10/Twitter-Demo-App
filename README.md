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

## Badges


# Images from App
<br><br>

 <img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-012350.jpg" align="left" width = "33%" height = 650 />


 <img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-012342.jpg" align="right" width = "33%" height = 650 />



<img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210131-013428.jpg" align="left" width = "33%" height = 650 />


<img src= "https://github.com/Kivanc10/linux_files/blob/master/img/Screenshot_20210128-005807.jpg" align="right" width = "33%" height = 650 />



<img src="https://github.com/Kivanc10/linux_files/blob/master/img/SVID-20210128-010050-1.gif" align="left" width = "33%" height = 650 />








