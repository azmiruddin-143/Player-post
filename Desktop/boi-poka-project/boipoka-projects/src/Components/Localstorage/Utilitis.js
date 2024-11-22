

const getStoredReadList = (storageKey='read-list' ) => {
    const storedListStr = localStorage.getItem(storageKey)
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }

    else {
        return [];
    }
}

const addToStoredReadList = (id,storageKey='read-list') => {

    const storedList = getStoredReadList()
    if (storedList.includes(id)) {
        alert("Alredy done")
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem(storageKey, storedListStr)
    }
}

export { addToStoredReadList, getStoredReadList };