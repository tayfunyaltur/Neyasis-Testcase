export const mapStateToProps = (state: any) => ({
    data: state.api.data,
    error: state.api.error,
});
