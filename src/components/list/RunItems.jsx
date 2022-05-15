import PropTypes from 'prop-types';
import { RunItemsStyled } from './RunItems.styles';

export const RunItems = ({ runInfoList }) => {
  return (
    <div className="runItems">
      <h3>{runInfoList.length}(개)의 기록이 있습니다.</h3>
      {runInfoList.map((runInfo) => {
        console.log(runInfo);
        return (
          <RunItemsStyled key={runInfo.id}>
            <div className="runItem__information">
              <div className="information__date">{runInfo.date}</div>
              <div className="information__distance">{runInfo.distance}km</div>
              <div className="information__time">{runInfo.time}</div>
              <div className="information__pace">{runInfo.pace}</div>
              <div className="information__condition">{runInfo.condition}</div>
            </div>
          </RunItemsStyled>
        );
      })}
    </div>
  );
};

RunItems.propTypes = {
  runInfoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      date: PropTypes.string,
      distance: PropTypes.string,
      time: PropTypes.string,
      pace: PropTypes.string,
      condition: PropTypes.string,
      feeling: PropTypes.string,
    }),
  ).isRequired,
};