let modal = {
  position: 'fixed',
  fontFamily: 'Arial, Helvetica, sans-serif',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'transparent',
  zIndex: 99999,
  transition: 'opacity 0.1s ease-in',
  pointerEvents: 'auto',
  overflowY: 'auto'
}

let container = {
  width: '400px',
  position: 'relative',
  margin: '10% auto',
  padding: '5px 20px 13px 20px',
  background: '#fff'
}

let close = {
  background: '#606061',
  color: '#FFFFFF',
  lineHeight: '25px',
  position: 'absolute',
  right: '-12px',
  textAlign: 'center',
  top: '-10px',
  width: '24px',
  textDecoration: 'none',
  fontWeight: 'bold',
  borderRadius: '12px',
  boxShadow: '1px 1px 3px #000',
  cursor: 'pointer'
}

export default {
  modal,
  container,
  close
}