const greeting = (str, thisIsWhatACallBackIs) => {
  console.log(str)
  thisIsWhatACallBackIs()
}

const thisIsWhatACallBackIs = () => {
  console.log('this is what a callback is')
}

greeting('pickles', thisIsWhatACallBackIs)
