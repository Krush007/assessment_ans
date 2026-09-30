// File: src/App.jsx
import { useState, useEffect, useContext, createContext } from "react";
import { BrowserRouter, Routes, Route, NavLink, useParams } from "react-router-dom";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//R1 
export const CourseList = 
({ items }) => (
 <ul>
    
     {items.map((c) => (
      <li key={c.id}>
        {c.name} ₹{c.price} {c.stock === 0 && <em>(Out of stock)</em>}
      </li>
    ))}
  
</ul>
);





//R2
function useFetch(url)
{
  const [s, setS] = useState({ data: null, loading: true, error: null });
  useEffect(() => {
    
    let ignore = false; 
    fetch(url)
      .then((r) => r.json())
      .then((data) => !ignore && setS({ data, loading: false, error: null }))
      .catch((error) => !ignore && setS({ data: null, loading: false, error }));
    return () => (ignore = true);
  }, [url]);
  
  return s;
}




//R3
const ThemeContext = createContext();
const ThemeProvider = ({ children }) =>
{
  
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;

};
const useTheme = () => useContext(ThemeContext);




//R4
export const fetchCourses = createAsyncThunk("courses/fetch", () =>
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((r) => r.json())
);

export const coursesSlice = createSlice({
  name: "courses",
  
  initialState: { items: [], status: "idle" },
  
  reducers: {
    addItem: (s, a) => { s.items.push(a.payload); },
    removeItem: (s, a) => { s.items = s.items.filter((i) => i.id !== a.payload); },
  },
  
  extraReducers: (b) => {
    b.addCase(fetchCourses.pending, (s) => { s.status = "loading"; })
     .addCase(fetchCourses.fulfilled, (s, a) => { s.status = "succeeded"; s.items = a.payload; })
     .addCase(fetchCourses.rejected, (s) => { s.status = "failed"; });
  },
});
