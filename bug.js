export class Bug {

  // To get the same error we're seeing, this static declaration is necessary.
  // However, the error we're seeing is likely hiding another one, because if
  // this declaration is removed, another error occurs.
  static blah = {};
  
  constructor(props) {
    this.test(props);
  }

  test = (props) => {
    // This is the line that is actaully causing the real error
    const test = props.test;
  }
}

export default Bug;
