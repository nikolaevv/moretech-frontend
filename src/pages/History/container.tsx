import { useAppSelector } from 'hooks/redux';
import { ProtectedRoute } from 'routes/ProtectedRoute';
import { userAPI } from 'services';
import HistoryView from './view';

function HistoryContainer() {
  const { id } = useAppSelector(state => state.authToken);
  const { data: transactions, error, isLoading } = userAPI.useFetchUserTransactionsQuery(id!);

  return (
    <ProtectedRoute>
      <HistoryView
        transactions={transactions ?? []}
        userId={id!}
      />
    </ProtectedRoute>
  );
}

export default HistoryContainer;
