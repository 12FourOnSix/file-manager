const 
  resetColor = '\x1b[0m',
  
  fontColors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
  },

  bgColors = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m'    
  },

  fbgColors = {
    magentaFont: `${fontColors['magenta']}%s${resetColor}%s`,
    yellowFont: `${fontColors['yellow']}%s${resetColor}%s`,
    greenFont: `%s${fontColors['green']}%s${resetColor}`,
    redFont: `${fontColors['red']}%s${resetColor}`,
    cyanFont: `%s${fontColors['cyan']}%s${resetColor}`

  }

export const {
  magentaFont,
  greenFont, 
  redFont,
  cyanFont, 
  yellowFont
} = fbgColors