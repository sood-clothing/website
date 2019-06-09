import {Typography} from 'antd';

export default ({children, ...style}) => (
    <Typography style={{
      color: 'whitesmoke',
      fontSize: "1rem",
      textTransform: 'uppercase', ...style
    }} level={3}> {children} </Typography>
)