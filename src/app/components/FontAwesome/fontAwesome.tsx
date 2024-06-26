import React from 'react'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; 

library.add(fas);

const FontAwesomeIcon = (props:any) => <FAIcon {...props} />;
export default FontAwesomeIcon;
