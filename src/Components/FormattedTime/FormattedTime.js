import styles from './Formatted.module.scss';

const FormattedTime = (props) => {
    const formatTime = (miliseconds) => {
      let milliseconds = Math.floor(miliseconds % 1000);
      let seconds = Math.floor((miliseconds / 1000) % 60);
      let minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
      let hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);
  
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
    };
  
    return (
    <div className={styles.timeFormat}>{formatTime(props.time)}</div>
    )
  };

export default FormattedTime; 