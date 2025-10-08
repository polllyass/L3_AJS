//1.
const responseData = pm.response.json();
function sortByTitleLengthDesc(a, b) {
    const lengthA = a.title?.length || 0;
    const lengthB = b.title?.length || 0;
    return lengthB - lengthA;
}
//posts


const responseData = pm.response.json();
function sortByAuthorName(a, b) {
    const nameA = a.name?.toLowerCase() || "";
    const nameB = b.name?.toLowerCase() || "";
    return nameA.localeCompare(nameB);
}//comments

