   //Split String based on length without breaking words
       str = str.split(/\s+/).reduce(function (prev, curr) {
          if (prev.length && (prev[prev.length - 1] + ' ' + curr).length <= max-length) {
            prev[prev.length - 1] += ' ' + curr;
          }
          else {
            prev.push(curr);
          }
          return prev;
        }, []);
