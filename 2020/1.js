const input = [1630, 1801, 1917, 1958, 1953, 1521, 1990, 1959, 1543, 1798, 638, 1499, 1977, 1433, 1532, 1780, 1559, 1866, 1962, 1999, 1623, 1772, 1730, 1670, 1791, 1947, 1961, 1523, 959, 1998, 1693, 1490, 1712, 910, 1635, 1837, 586, 1590, 1741, 1739, 1660, 1883, 1777, 1734, 1413, 1456, 1511, 1957, 1738, 1685, 1677, 1419, 1566, 1639, 1578, 1922, 1856, 1946, 1965, 1649, 1854, 1610, 1806, 1424, 1616, 218, 1678, 1992, 1985, 903, 1626, 1412, 1964, 671, 1692, 1571, 1690, 1587, 1933, 1367, 1585, 1575, 498, 1601, 2005, 1711, 1948, 1991, 1580, 1704, 207, 1560, 1867, 1600, 1594, 1930, 1541, 1832, 1613, 1599, 1757, 71, 1534, 1940, 1982, 1960, 1530, 1908, 1857, 1410, 1987, 1526, 1546, 2002, 1923, 1972, 1752, 1984, 1754, 1916, 1942, 1980, 1608, 1398, 1438, 1955, 1968, 1799, 1976, 1847, 1775, 1904, 1983, 1945, 1554, 1486, 1527, 1884, 1553, 1736, 1561, 1513, 1695, 1431, 1997, 1405, 1872, 1434, 1679, 1609, 105, 1582, 1795, 1826, 1886, 1472, 2007, 1617, 1978, 1669, 1764, 1865, 1773, 1993, 1666, 1583, 2009, 1969, 2001, 1659, 1833, 1713, 1893, 2000, 1520, 1652, 1437, 1556, 1633, 1386, 1819, 1973, 1426, 1975, 2010, 1863, 1593, 1996, 1796, 1986, 1995, 657, 1784, 1644, 1941, 1596, 1849, 1065, 1927, 1525]

function productOf2(inputArray, sum) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] + inputArray[j] === sum) {
                return inputArray[i] * inputArray[j]
            }
        }
    }
}

function productOf3(inputArray, sum) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            for (let k = j + 1; k < inputArray.length; k++) {
                if (inputArray[i] + inputArray[j] + inputArray[k] === sum) {
                    return inputArray[i] * inputArray[j] * inputArray[k]
                }
            }
        }
    }
}



console.log(productOf2(input, 2020));
console.log(productOf3(input, 2020));

// Edited solution of 2023
const { k_combinations } = require("../lib/lib");
let a = k_combinations(input, 2).filter((v) => v[0]+v[1]===2020).flat()
console.log(a)
console.log(a.reduce((acc, v) => acc*v, 1))
let b = k_combinations(input, 3).filter((v) => v[0]+v[1]+v[2]===2020).flat()
console.log(b.reduce((acc,v) => acc*v, 1))
