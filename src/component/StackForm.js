import Stack from "@mui/material/Stack";

function StackForm({children, direction = "column", onSubmit}) {
  return (
    <Stack
      component="form"
      flex={1}
      spacing={2}
      marginBottom="12px"
      direction={direction}
      justifyContent="center"
      alignItems="center"
      width="75%"
      alignSelf="center"
      onSubmit={onSubmit}
    >
      {children}
    </Stack>
  );
}

export default StackForm;