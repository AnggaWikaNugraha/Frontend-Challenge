import { Skeleton } from '@mui/material';
import React, { useState } from 'react'
import IComp from '../assets/one_dig.png'

const HOME = () => {

  const [loading, setloading] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const [showModalSorting, setShowModalSorting] = useState(false);

  const [data, setdata] = useState([
    {
      id: 1,
      job_name: 'tes job 1',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
    {
      id: 2,
      job_name: 'tes job 2',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
    {
      id: 3,
      job_name: 'tes job 3',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
    {
      id: 4,
      job_name: 'tes job 4',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
    {
      id: 5,
      job_name: 'tes job 5',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '5 january 2025'
    },
    {
      id: 6,
      job_name: 'tes job 6',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
    {
      id: 7,
      job_name: 'tes job 7',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
    {
      id: 8,
      job_name: 'tes job 8',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
    {
      id: 9,
      job_name: 'tes job 9',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '9 january 2025'
    },
    {
      id: 10,
      job_name: 'tes job 10',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
    {
      id: 11,
      job_name: 'tes job 11',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
    {
      id: 12,
      job_name: 'tes job 12',
      company_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet egestas augue. Proin at interdum ligula. Duis malesuada id mi non scelerisque.',
      created_at: '1 january 2025'
    },
  ]);

  return (
    <>

      <div className='d-flex flex-column gap-16px p-16px'>
        <div className='job-title'>Job Profile</div>
        <div className='job-title-sub'>List of job profile</div>
      </div>

      <div className='p-16px'>
        <div className='d-flex align-center justify-between w-100 responsive-mobile'>
          <div className='job-profile-search-wrapp'>
            <ISearch />
            <input
              placeholder='Search Content'
              className='ml-8px job-profile-search-placeholder' />
          </div>
          <div>
            <div onClick={() => setisVisible(!isVisible)} className='mw-300px cursor-pointer d-flex align-center btn-manage-role-create ml-16px h-5px gap-16px'>
              <IFilter />
              <div>
                {
                  isVisible ? 'Tampilkan Kartu' : 'Sembunyikan Kartu'
                }
              </div>
            </div>
          </div>
        </div>
        <div className='job-profile-count-wrapp'>
          {
            loading
              ? <div className='job-profile-count mt-10px'><Skeleton width={300} height={20} /></div>
              : <div className='job-profile-count mt-10px'>
                {isVisible ? 0 : data?.length} item(s) found in the list
              </div>
          }
        </div>
      </div>

      <div className='kontainer-card grid-cols-4 grid'>
        {
          loading ? <LoadingComp />
            : <>
              {
                !isVisible ? data?.length > 0
                  ? data?.map((res) => {
                    return (
                      <>
                        <div className='job-profile-satuan-kontainer'>
                          <div>
                            <img className='w-40px h-40px' src={IComp} />
                          </div>
                          <div>
                            <div className='b2-bold mt-4px job-profile-satuan-title'>
                              {res?.job_name}
                            </div>
                            <div className='mt-4px job-profile-satuan-kontainer-wrapp'>
                              <div className='job-profile-satuan-desc'>
                                {res?.company_name}
                              </div>
                            </div>
                            <div className='mt-4px'>
                              {
                                res?.created_at && <>
                                  <div className='job-profile-satuan-tgl'>
                                    Created at: {res?.created_at}
                                  </div>
                                </>
                              }
                            </div>
                          </div>
                          <div className='job-profile-satuan-kontainer-wrapp-right'>

                          </div>
                        </div>
                      </>
                    )
                  }) : <NoDataFound /> : ''
              }
            </>
        }
      </div>
    </>
  )
}

const IFilter = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M7.31719 13.8682V9.9849H8.56719V11.3016H13.8839V12.5516H8.56719V13.8682H7.31719ZM2.11719 12.5516V11.3016H6.06719V12.5516H2.11719ZM4.81719 9.91823V8.61823H2.11719V7.36823H4.81719V6.05156H6.06719V9.91823H4.81719ZM7.31719 8.61823V7.36823H13.8839V8.61823H7.31719ZM9.93385 5.9849V2.10156H11.1839V3.41823H13.8839V4.66823H11.1839V5.9849H9.93385ZM2.11719 4.66823V3.41823H8.68385V4.66823H2.11719Z" fill="#fff" />
    </svg>
  )
}

const IAdd = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M7.24812 12.6693V8.75319H3.33203V7.25202H7.24812V3.33594H8.74928V7.25202H12.6654V8.75319H8.74928V12.6693H7.24812Z" fill="white" />
    </svg>
  )
}

const ISearch = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M12.97 14L8.81744 9.85306C8.49046 10.1034 8.11444 10.3048 7.68937 10.4571C7.26431 10.6095 6.81199 10.6857 6.33243 10.6857C5.12262 10.6857 4.09809 10.2638 3.25886 9.42008C2.41962 8.57676 2 7.55102 2 6.34286C2 5.13469 2.41962 4.10873 3.25886 3.26498C4.09809 2.42166 5.12262 2 6.33243 2C7.54223 2 8.56959 2.42166 9.4145 3.26498C10.259 4.10873 10.6812 5.13469 10.6812 6.34286C10.6812 6.82177 10.6077 7.27347 10.4608 7.69796C10.3135 8.12245 10.1144 8.49252 9.86376 8.80816L14 12.9551L12.97 14ZM6.33243 9.18367C7.12807 9.18367 7.80382 8.90873 8.35967 8.35886C8.91553 7.80941 9.19346 7.13741 9.19346 6.34286C9.19346 5.5483 8.91553 4.87608 8.35967 4.3262C7.80382 3.77676 7.12807 3.50204 6.33243 3.50204C5.53678 3.50204 4.86387 3.77676 4.31368 4.3262C3.76305 4.87608 3.48774 5.5483 3.48774 6.34286C3.48774 7.13741 3.76305 7.80941 4.31368 8.35886C4.86387 8.90873 5.53678 9.18367 6.33243 9.18367Z" fill="#7D7B80" />
    </svg>
  )
}

const LoadingComp = () => {
  return (
    <>
      Loading
    </>
  )
}

const NoDataFound = () => {
  return (
    <>
      NoDataFound
    </>
  )
}

export default HOME