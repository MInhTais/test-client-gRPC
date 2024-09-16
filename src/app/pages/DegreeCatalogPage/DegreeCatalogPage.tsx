import { Fragment, useRef, useState } from 'react'
import styles from './DegreeCatalogPage.module.scss'
import classNames from 'classnames/bind'
import { toast } from 'react-toastify'
import { useAppContext } from '~/app/shared/AppContext'
import ModalContent from '~/app/components/ModalContent'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { DegreesType } from '~/app/types/DegreesType.type'
import { queryService } from '~/app/services/degreeQuery/degreeCatalogQueryService'
import { commandService } from '~/app/services/command/degreeCatalogCommandService'
import UpdateDegree from './components/UpdateDegreeCatalog/UpdateDegree'
import CreateDegree from './components/CreateDegreeCatalog/CreateDegree'
import ListDegree from './components/ListDegreeCatalog/ListDegree'
import { fetchData } from '~/app/utils/dataService'

const cx = classNames.bind(styles)

export default function DegreeCatalogPage() {
    const { setOpenConfirmDelete, onConfirm } = useAppContext()
    const [mode, setMode] = useState<'dark' | 'light'>('dark')
    const [valueEdit, setValueEdit] = useState('')
    const [openEdit, setOpenEdit] = useState(false)
    const greetingIdRef = useRef<number>(0)
    const queryClient = useQueryClient()

    // actions greetings
    const createMutation = useMutation({
        mutationFn: (degname: string) => commandService.create(degname)
    })

    const deleteMutation = useMutation({
        mutationFn: (id: number) => commandService.deleteById(id)
    })

    const getByIdMutation = useMutation({
        mutationFn: (id: number) => queryService.getById(id)
    })

    const updateMutation = useMutation({
        mutationFn: ({ Id, DegName }: DegreesType) => commandService.updateId({ Id, DegName })
    })

    const { data: queryData } = useQuery<DegreesType[]>({
        queryKey: ['degnames'],
        queryFn: async () => {
            return await fetchData<DegreesType[]>(queryService.getAll)
        }
    })

    // Handle add
    const handleAddDegree = (name: string) => {
        if (name) {
            createMutation.mutateAsync(name, {
                onSuccess: () => {
                    toast.success('Degree added successfully!')
                    queryClient.invalidateQueries({
                        queryKey: ['degnames']
                    })
                },
                onError: (error: Error) => {
                    toast.error(error.message || 'Failed to add degree')
                }
            })
        } else {
            toast.error('Please enter name')
        }
    }

    // Handle delete greeting
    const openDeleteDegree = (id: number) => {
        setOpenConfirmDelete(true)
        if (onConfirm) {
            onConfirm(() => {
                deleteMutation.mutateAsync(id, {
                    onSuccess: () => {
                        toast.success('Degree deleted successfully!')
                        queryClient.invalidateQueries({
                            queryKey: ['degnames']
                        })
                    },
                    onError: (error: Error) => {
                        toast.error(error.message || 'Delete failed')
                    }
                })
            })
        }
    }

    // Handle edit greeting
    const openEditDegree = (id: number) => {
        greetingIdRef.current = id

        getByIdMutation.mutateAsync(id, {
            onSuccess: async () => {
                const { DegName } = await fetchData<DegreesType>(() => queryService.getById(id))
                setValueEdit(DegName)
                setOpenEdit(true)
            },
            onError: (error: Error) => {
                toast.error(error.message || 'Get message failed')
            }
        })
    }

    const handleUpdateDegree = (id: number, name: string) => {
        updateMutation.mutateAsync(
            { Id: id, DegName: name },
            {
                onSuccess: () => {
                    toast.success('Degree updated successfully!')
                    queryClient.invalidateQueries({
                        queryKey: ['degnames']
                    })
                },
                onError: (error: Error) => {
                    toast.error(error.message || 'Failed to update degree')
                }
            }
        )
    }

    return (
        <Fragment>
            <ModalContent title='Edit user' isOpen={openEdit} setIsOpen={setOpenEdit}>
                <UpdateDegree
                    valueEdit={valueEdit}
                    onUpdateDegree={handleUpdateDegree}
                    id={greetingIdRef.current}
                    setOpenEdit={setOpenEdit}
                />
            </ModalContent>
            <div
                className={cx('wrap', {
                    light: mode === 'light',
                    dark: mode === 'dark'
                })}
            >
                <div
                    className={cx('inner', {
                        light: mode === 'light',
                        dark: mode === 'dark'
                    })}
                >
                    <div
                        className={cx('content', {
                            light: mode === 'light',
                            dark: mode === 'dark'
                        })}
                    >
                        <div>
                            <h1
                                className={cx('title', {
                                    light: mode === 'light',
                                    dark: mode === 'dark'
                                })}
                            >
                                Degree Catalog 👌
                            </h1>
                            <button
                                className={cx('mode', {
                                    light: mode === 'light',
                                    dark: mode === 'dark'
                                })}
                                onClick={() => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                            >
                                {mode === 'dark' ? <i className='ri-sun-line'></i> : <i className='ri-moon-fill'></i>}
                            </button>
                        </div>
                        <CreateDegree onCreateDegree={handleAddDegree} mode={mode} />
                    </div>
                    <div
                        className={cx('list', {
                            light: mode === 'light',
                            dark: mode === 'dark'
                        })}
                    >
                        {/* Render list greetings */}
                        <ListDegree
                            degreeCatalogs={queryData || []}
                            mode={mode}
                            onEdit={openEditDegree}
                            onDelete={openDeleteDegree}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
