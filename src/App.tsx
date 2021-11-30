import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from './hooks/useTypedSelector';
import { getOrganization, getTotalPages } from './types/organization';
import { Loader, PaginationRounded, ErrorComponent, Repository, Input } from './components';

function App() {
  const dispatch = useDispatch();
  const { repositories, loading, error, total_pages } = useTypedSelector(state => state);
  const [organization, setOrganization] = useState<string>();
  const [current_page, setPage] = useState<number>();

  function callGetOrganization(event: Event) {
    event.preventDefault();
    if (!organization) return;
    setOrganization(organization.trim());
    setPage(1);
    dispatch(getTotalPages(organization));
    dispatch(getOrganization({ organization, page: current_page }));
  }

  useEffect(() => {
    if (organization?.trim()) {
      setOrganization(organization.trim())
      dispatch(getOrganization({ organization, page: current_page }));
    }
  }, [current_page])

  return (
    <div className="container">
      <div>
        <Input setOrganization={setOrganization} callGetOrganization={callGetOrganization} />
      </div>
      <div className="pagination">
        {total_pages !== 0 && <PaginationRounded current_page={current_page} setPage={setPage} size={total_pages} />}
      </div>
      <div className="repositories">
        {
          loading ? <Loader /> :
            error || repositories.length === 0 ? <ErrorComponent error={error} /> :
              repositories.map((repository => <Repository key={repository.id} repository={repository} />))
        }
      </div>
    </div>
  );
}

export default App;