const sleep = (n)=> {
    return new Promise((resolve) => setTimeout(resolve, n));
  }
  export default sleep;