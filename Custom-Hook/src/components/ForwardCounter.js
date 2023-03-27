import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../Hooks/UseCounter';

const ForwardCounter = () => {
const counter= useCounter()


  return <Card>{counter}</Card>;
};

export default ForwardCounter;
