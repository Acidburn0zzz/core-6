import completeScoreboardState from '@Src/global/Room/completeScoreboard';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import GameEndFullScoreboard from '../FullScoreboard';
import GameEndScoreboardSwitch from '../ScoreboardSwitch';
import GameEndTopScoreBoard from '../TopScoreboard/';
import styles from './GameEndScoreboardStyle';

export default function GameEndScoreBoard() {
  const players = useRecoilValue(completeScoreboardState);
  const [displayTop, setDisplayTop] = useState(true);
  const topPlayers = players.filter((player) => player.position < 4);

  return (
    <View style={styles.container}>
      <GameEndScoreboardSwitch displayTop={displayTop} setDisplayTop={setDisplayTop} />
      {displayTop ? (
        <GameEndTopScoreBoard players={topPlayers} />
      ) : (
        <GameEndFullScoreboard players={players} />
      )}
    </View>
  );
}
