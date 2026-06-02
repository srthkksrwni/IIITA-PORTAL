// components/ui/PageContainer.jsx

function PageContainer({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {children}
    </div>
  );
}

export default PageContainer;