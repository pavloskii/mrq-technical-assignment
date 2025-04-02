import { toggleShowCardInfo, selectors } from '@/store/dashboardOptionsSlice';
import './toggleCardInfo.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

const ToggleCardInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const showCardInfo = useAppSelector(selectors.selectShowCardInfo);

  const handleChange = () => {
    dispatch(toggleShowCardInfo());
  };

  return (
    <label className="toggleCardInfo">
      +Info
      <input
        className="toggleCardInfo__checkbox"
        type="checkbox"
        checked={showCardInfo}
        onChange={handleChange}
      />
    </label>
  );
};

export default ToggleCardInfo;
