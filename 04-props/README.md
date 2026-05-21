# React Props 

- In react `props` means properties.
- They are used to pass data from parent components to child component.

## Characterstics 

- Readonly 
- From parent to child 
- Uni-directional 
- Props can pass anything(number,string,array,object...)

## Prop drilling 

Prop drilling happens when props are passed through many intermediate components just to reach a deeply needed child.

```js 

    App
     |
    Parent
     |
    Child
   
```