import React from 'react';
import { translate } from '../../translate/translate';
import mainWindow from '../../util/mainWindow';

class AddCoinOptionsAC extends React.Component {
  render() {
    const _assetChains = [
      'bet',
      'bots',
      'ceal',
      'coqui',
      'crypto',
      'hodl',
      'dex',
      'jumblr',
      'kv',
      'mgw',
      //'mvp',
      'mnz',
      'pangea',
      'revs',
      'mshark',
      'supernet',
      'wlc',
    ];
    let _items = [];

    for (let i = 0; i < _assetChains.length; i++) {
      let availableModes = _assetChains[i] !== 'kv' && _assetChains[i] !== 'mgw' ? 'native|spv' : 'native';

      if (mainWindow.arch !== 'x64') {
        availableModes = 'spv';
      }

      _items.push(
        <option
          key={ _assetChains[i] }
          value={ `${_assetChains[i].toUpperCase()}|${availableModes}` }>{ translate(`ASSETCHAINS.${_assetChains[i].toUpperCase()}`) }</option>
      );
    }

    return (
      <optgroup label={ translate('ADD_COIN.ASSETCHAINS') }>
      { _items }
      </optgroup>
    );
  }
}

export default AddCoinOptionsAC;
