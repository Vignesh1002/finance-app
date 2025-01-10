import { useApi } from '../context/ApiContext';
import { QueryClient } from '@tanstack/react-query';
import SortableTable from '../components/SortableTable';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Filter from '../components/Filter';
import { useState } from 'react';

export const queryClient = new QueryClient();

const Data = () => {
    const [showFilter, setShowFilter] = useState(false);
    const { isDisabled } = useApi();

    const onClose = () => {
        setShowFilter(false);
    };

    return (
        <div>
            <div className='px-[6rem] md:px-[8rem] below-450:px-[3rem] mt-12'>
                <div className='flex justify-between items-center flex-col gap-4 md:flex-row'>
                    <h2 className='text-3xl text-center md:text-left'>Annual income statement of APPLE</h2>
                    <div className={`${isDisabled && "opacity-70"} p-2 bg-primary text-white rounded-lg font-semibold`}>
                        <button onClick={() => setShowFilter(!showFilter)} disabled={isDisabled}>Apply Filter <FontAwesomeIcon icon={faFilter} className='ml-2'/></button>
                    </div>
                </div>
                    <SortableTable />
                    {showFilter && <Filter onClose={onClose} open={showFilter} />}
            </div>
        </div>
    );
}

export default Data;